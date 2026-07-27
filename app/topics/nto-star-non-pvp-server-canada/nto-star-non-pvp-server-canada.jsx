import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-canada');
}

export default function NtoStarNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-canada" />;
}
