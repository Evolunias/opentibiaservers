import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-private-server');
}

export default function CurrentImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-private-server" />;
}
