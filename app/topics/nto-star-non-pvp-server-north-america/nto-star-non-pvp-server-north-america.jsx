import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-north-america');
}

export default function NtoStarNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-north-america" />;
}
