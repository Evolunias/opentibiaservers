import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-private-server');
}

export default function PopularClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-private-server" />;
}
