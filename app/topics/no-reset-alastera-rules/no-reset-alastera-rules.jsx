import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-rules');
}

export default function NoResetAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-rules" />;
}
