import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-private-server');
}

export default function ActiveClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-private-server" />;
}
