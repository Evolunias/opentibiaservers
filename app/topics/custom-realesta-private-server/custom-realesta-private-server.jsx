import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-private-server');
}

export default function CustomRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-private-server" />;
}
