import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-latin-america');
}

export default function NtoStarPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-latin-america" />;
}
