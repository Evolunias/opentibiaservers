import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-south-america');
}

export default function ThorniaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-south-america" />;
}
