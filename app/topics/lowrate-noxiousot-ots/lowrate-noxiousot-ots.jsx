import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-ots');
}

export default function LowrateNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-ots" />;
}
