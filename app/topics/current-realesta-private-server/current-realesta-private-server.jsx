import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-private-server');
}

export default function CurrentRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-private-server" />;
}
