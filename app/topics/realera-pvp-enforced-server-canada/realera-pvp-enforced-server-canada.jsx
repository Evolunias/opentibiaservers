import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-canada');
}

export default function RealeraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-canada" />;
}
