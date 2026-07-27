import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-tibia');
}

export default function BestYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-tibia" />;
}
