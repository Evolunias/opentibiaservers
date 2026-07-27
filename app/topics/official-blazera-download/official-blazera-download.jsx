import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-download');
}

export default function OfficialBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-download" />;
}
