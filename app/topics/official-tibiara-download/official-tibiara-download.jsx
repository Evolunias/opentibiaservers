import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-download');
}

export default function OfficialTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-download" />;
}
