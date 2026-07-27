import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-open-tibia');
}

export default function BestYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-open-tibia" />;
}
