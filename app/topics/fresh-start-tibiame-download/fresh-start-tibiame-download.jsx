import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-download');
}

export default function FreshStartTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-download" />;
}
