import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-download');
}

export default function TibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibiara-download" />;
}
