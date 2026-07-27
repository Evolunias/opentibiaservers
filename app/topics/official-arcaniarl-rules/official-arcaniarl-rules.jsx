import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-rules');
}

export default function OfficialArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-rules" />;
}
