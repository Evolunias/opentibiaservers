import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-rules');
}

export default function BestRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-rules" />;
}
