import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-private-server');
}

export default function RealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-private-server" />;
}
