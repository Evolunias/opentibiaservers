import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-download');
}

export default function TibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibiame-download" />;
}
