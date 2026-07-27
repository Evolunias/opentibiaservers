import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-private-server');
}

export default function TopClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-private-server" />;
}
