import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-rules');
}

export default function NoResetNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-rules" />;
}
