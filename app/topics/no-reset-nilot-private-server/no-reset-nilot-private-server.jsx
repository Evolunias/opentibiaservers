import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-private-server');
}

export default function NoResetNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-private-server" />;
}
