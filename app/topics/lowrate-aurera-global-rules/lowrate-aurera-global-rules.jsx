import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-rules');
}

export default function LowrateAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-rules" />;
}
