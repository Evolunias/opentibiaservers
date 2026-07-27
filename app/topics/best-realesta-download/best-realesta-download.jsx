import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-download');
}

export default function BestRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-download" />;
}
