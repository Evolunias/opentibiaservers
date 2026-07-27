import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-open-tibia');
}

export default function BestRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-open-tibia" />;
}
