import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-private-server');
}

export default function NoResetRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-private-server" />;
}
