import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-private-server');
}

export default function ClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-private-server" />;
}
