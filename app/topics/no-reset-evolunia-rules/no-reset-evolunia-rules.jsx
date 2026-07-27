import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-rules');
}

export default function NoResetEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-rules" />;
}
