import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-open-tibia');
}

export default function BestCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-canob-open-tibia" />;
}
