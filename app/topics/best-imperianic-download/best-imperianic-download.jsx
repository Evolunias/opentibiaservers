import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-download');
}

export default function BestImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-download" />;
}
