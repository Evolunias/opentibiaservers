import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-private-server');
}

export default function CurrentCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-private-server" />;
}
