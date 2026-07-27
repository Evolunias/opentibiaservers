import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-rules');
}

export default function TopRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-rules" />;
}
