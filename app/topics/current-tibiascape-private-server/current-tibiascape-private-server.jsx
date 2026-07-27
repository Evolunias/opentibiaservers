import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-private-server');
}

export default function CurrentTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-private-server" />;
}
