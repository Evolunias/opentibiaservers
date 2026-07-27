import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-ots');
}

export default function BestRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-ots" />;
}
