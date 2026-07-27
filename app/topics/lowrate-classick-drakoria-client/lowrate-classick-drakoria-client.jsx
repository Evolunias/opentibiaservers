import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-client');
}

export default function LowrateClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-client" />;
}
