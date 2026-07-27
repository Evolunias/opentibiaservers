import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-canada');
}

export default function NtoStarPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-canada" />;
}
