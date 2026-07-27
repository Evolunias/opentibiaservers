import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-north-america');
}

export default function NtoStarPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-north-america" />;
}
