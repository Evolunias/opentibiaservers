import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-server');
}

export default function LowrateNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-server" />;
}
