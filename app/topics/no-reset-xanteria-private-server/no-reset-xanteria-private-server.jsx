import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-private-server');
}

export default function NoResetXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-private-server" />;
}
