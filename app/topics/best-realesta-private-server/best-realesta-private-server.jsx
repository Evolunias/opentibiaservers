import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-private-server');
}

export default function BestRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-private-server" />;
}
