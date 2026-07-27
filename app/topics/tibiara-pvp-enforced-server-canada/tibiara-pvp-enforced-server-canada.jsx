import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-canada');
}

export default function TibiaraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-canada" />;
}
