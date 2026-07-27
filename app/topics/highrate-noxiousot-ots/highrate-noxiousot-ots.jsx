import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-ots');
}

export default function HighrateNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-ots" />;
}
