import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-rules');
}

export default function HighrateMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-rules" />;
}
