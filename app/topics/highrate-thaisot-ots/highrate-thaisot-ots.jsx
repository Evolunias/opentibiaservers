import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-ots');
}

export default function HighrateThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-ots" />;
}
