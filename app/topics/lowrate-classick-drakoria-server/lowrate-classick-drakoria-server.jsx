import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-server');
}

export default function LowrateClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-server" />;
}
