import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-private-server');
}

export default function FreshStartRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-private-server" />;
}
