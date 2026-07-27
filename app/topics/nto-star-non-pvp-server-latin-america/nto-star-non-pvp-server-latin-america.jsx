import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-latin-america');
}

export default function NtoStarNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-latin-america" />;
}
