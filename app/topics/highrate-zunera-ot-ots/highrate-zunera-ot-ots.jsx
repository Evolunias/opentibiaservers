import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-ots');
}

export default function HighrateZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-ots" />;
}
