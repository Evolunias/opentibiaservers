import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-canada');
}

export default function NtoStarPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-canada" />;
}
