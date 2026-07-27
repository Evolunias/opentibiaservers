import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-rare-items');
}

export default function PaceraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="pacera-rare-items" />;
}
