import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-rules');
}

export default function NoResetArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-rules" />;
}
