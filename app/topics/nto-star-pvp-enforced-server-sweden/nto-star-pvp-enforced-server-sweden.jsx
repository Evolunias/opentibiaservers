import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-sweden');
}

export default function NtoStarPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-sweden" />;
}
