import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-rules');
}

export default function NoResetThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-rules" />;
}
