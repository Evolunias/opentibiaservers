import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-client');
}

export default function NoResetNilotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-client" />;
}
