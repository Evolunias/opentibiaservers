import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-market');
}

export default function TrashformersMarketKeywordPage() {
  return <StaticKeywordPage slug="trashformers-market" />;
}
