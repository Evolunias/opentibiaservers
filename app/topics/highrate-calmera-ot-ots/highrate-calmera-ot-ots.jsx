import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-ots');
}

export default function HighrateCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-ots" />;
}
