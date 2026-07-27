import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-france');
}

export default function NtoStarPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-france" />;
}
