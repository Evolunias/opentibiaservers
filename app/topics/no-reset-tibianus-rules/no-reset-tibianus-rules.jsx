import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-rules');
}

export default function NoResetTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-rules" />;
}
