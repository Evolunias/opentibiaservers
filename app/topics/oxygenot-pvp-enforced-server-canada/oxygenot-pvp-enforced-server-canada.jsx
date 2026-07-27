import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-canada');
}

export default function OxygenotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-canada" />;
}
