import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-server');
}

export default function NoResetNilotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-server" />;
}
