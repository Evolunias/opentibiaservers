import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-canada');
}

export default function KasteriaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-canada" />;
}
