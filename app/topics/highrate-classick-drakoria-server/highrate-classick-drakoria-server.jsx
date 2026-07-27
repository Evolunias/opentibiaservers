import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-server');
}

export default function HighrateClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-server" />;
}
