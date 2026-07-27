import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-ots');
}

export default function HighrateClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-ots" />;
}
