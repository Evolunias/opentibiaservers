import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-ots');
}

export default function HighrateCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-ots" />;
}
