import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-private-server');
}

export default function TopImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-private-server" />;
}
