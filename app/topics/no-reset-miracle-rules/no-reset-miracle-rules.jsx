import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-rules');
}

export default function NoResetMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-rules" />;
}
