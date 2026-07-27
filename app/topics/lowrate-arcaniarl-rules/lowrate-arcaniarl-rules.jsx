import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-rules');
}

export default function LowrateArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-rules" />;
}
