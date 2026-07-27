import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-client');
}

export default function LowrateNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-client" />;
}
