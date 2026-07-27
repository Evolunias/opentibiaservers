import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-ot');
}

export default function LowrateNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-ot" />;
}
