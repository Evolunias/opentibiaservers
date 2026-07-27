import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-private-server');
}

export default function OfficialRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-private-server" />;
}
