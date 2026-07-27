import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-private-server');
}

export default function NoResetThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-private-server" />;
}
