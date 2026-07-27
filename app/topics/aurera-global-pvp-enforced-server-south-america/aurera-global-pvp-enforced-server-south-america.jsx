import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-south-america');
}

export default function AureraGlobalPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-south-america" />;
}
