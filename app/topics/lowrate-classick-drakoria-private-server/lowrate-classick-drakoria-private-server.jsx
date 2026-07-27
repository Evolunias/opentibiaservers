import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-private-server');
}

export default function LowrateClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-private-server" />;
}
