import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-private-server');
}

export default function CurrentThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-private-server" />;
}
