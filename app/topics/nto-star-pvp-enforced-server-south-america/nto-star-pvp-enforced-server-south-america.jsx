import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-south-america');
}

export default function NtoStarPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-south-america" />;
}
