import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-private-server');
}

export default function TopRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-private-server" />;
}
