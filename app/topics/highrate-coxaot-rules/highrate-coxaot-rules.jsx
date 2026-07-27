import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-rules');
}

export default function HighrateCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-rules" />;
}
