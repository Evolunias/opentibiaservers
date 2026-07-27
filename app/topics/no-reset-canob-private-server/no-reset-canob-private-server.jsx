import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-private-server');
}

export default function NoResetCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-private-server" />;
}
