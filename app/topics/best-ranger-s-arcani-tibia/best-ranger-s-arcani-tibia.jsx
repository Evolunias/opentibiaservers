import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-tibia');
}

export default function BestRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-tibia" />;
}
