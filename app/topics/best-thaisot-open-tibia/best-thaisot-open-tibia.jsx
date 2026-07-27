import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-open-tibia');
}

export default function BestThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-open-tibia" />;
}
