import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-rules');
}

export default function CurrentArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-rules" />;
}
