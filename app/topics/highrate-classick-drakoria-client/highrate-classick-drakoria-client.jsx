import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-client');
}

export default function HighrateClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-client" />;
}
