import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-rules');
}

export default function LowrateCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-rules" />;
}
