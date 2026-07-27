import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-download');
}

export default function BestCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-canob-download" />;
}
