import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-private-server');
}

export default function CurrentRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-realera-private-server" />;
}
