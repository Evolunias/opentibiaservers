import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-download');
}

export default function CustomTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-download" />;
}
