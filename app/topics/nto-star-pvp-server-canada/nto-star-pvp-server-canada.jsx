import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-canada');
}

export default function NtoStarPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-canada" />;
}
