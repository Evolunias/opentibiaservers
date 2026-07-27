import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-rules');
}

export default function ActiveRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-rules" />;
}
