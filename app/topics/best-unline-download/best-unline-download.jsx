import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-download');
}

export default function BestUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-unline-download" />;
}
