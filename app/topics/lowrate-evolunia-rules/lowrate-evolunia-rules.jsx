import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-rules');
}

export default function LowrateEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-rules" />;
}
