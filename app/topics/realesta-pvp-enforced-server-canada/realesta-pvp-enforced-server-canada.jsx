import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-canada');
}

export default function RealestaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-canada" />;
}
