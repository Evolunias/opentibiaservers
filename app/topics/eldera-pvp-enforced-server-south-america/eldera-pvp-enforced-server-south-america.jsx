import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-enforced-server-south-america');
}

export default function ElderaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-enforced-server-south-america" />;
}
