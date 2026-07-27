import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-enforced-server-canada');
}

export default function AlasteraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-enforced-server-canada" />;
}
