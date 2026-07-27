import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-north-america');
}

export default function NtoStarPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-north-america" />;
}
