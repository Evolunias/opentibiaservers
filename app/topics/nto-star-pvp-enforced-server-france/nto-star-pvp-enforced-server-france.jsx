import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-france');
}

export default function NtoStarPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-france" />;
}
