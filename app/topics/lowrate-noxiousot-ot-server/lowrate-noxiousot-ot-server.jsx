import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-ot-server');
}

export default function LowrateNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-ot-server" />;
}
