import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-south-america');
}

export default function TibijkaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-south-america" />;
}
