import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-south-america');
}

export default function OlderaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-south-america" />;
}
