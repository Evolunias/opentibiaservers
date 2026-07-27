import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-rules');
}

export default function NoResetClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-rules" />;
}
