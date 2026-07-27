import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-private-server');
}

export default function CurrentNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-private-server" />;
}
