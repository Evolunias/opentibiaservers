import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-rules');
}

export default function LowrateMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-rules" />;
}
