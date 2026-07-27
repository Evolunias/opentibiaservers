import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-rules');
}

export default function LowrateRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-rules" />;
}
