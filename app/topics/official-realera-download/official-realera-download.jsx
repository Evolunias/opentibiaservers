import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-download');
}

export default function OfficialRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-realera-download" />;
}
