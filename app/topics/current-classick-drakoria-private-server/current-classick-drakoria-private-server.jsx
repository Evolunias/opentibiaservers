import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-private-server');
}

export default function CurrentClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-private-server" />;
}
