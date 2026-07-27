import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-ot');
}

export default function BestRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-ot" />;
}
