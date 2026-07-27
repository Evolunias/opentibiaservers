import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-rules');
}

export default function NoResetSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-rules" />;
}
