import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-sweden');
}

export default function CanobPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-sweden" />;
}
