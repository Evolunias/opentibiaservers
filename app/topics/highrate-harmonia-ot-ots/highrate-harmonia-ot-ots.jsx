import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-ots');
}

export default function HighrateHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-ots" />;
}
