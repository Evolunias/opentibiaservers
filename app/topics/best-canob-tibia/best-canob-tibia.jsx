import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-tibia');
}

export default function BestCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-canob-tibia" />;
}
