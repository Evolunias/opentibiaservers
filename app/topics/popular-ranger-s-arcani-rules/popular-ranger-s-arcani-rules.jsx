import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-rules');
}

export default function PopularRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-rules" />;
}
