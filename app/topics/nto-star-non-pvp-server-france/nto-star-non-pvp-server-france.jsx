import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-france');
}

export default function NtoStarNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-france" />;
}
