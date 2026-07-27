import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-tibia');
}

export default function BestThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-tibia" />;
}
