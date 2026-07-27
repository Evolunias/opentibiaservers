import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-rules');
}

export default function NoResetAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-rules" />;
}
