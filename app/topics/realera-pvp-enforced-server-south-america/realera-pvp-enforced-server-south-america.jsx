import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-south-america');
}

export default function RealeraPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-south-america" />;
}
