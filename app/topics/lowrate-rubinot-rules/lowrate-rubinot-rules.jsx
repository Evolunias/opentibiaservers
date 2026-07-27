import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-rules');
}

export default function LowrateRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-rules" />;
}
