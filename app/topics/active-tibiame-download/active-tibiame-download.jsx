import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-download');
}

export default function ActiveTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-download" />;
}
