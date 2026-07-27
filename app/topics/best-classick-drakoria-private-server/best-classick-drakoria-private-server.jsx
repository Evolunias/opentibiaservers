import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-private-server');
}

export default function BestClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-private-server" />;
}
