import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-private-server');
}

export default function ActiveRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-private-server" />;
}
