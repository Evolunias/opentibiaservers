import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-private-server');
}

export default function FreshStartClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-private-server" />;
}
