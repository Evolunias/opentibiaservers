import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-latin-america');
}

export default function NtoStarPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-latin-america" />;
}
