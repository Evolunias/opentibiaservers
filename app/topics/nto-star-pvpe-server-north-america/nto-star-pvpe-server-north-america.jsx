import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-north-america');
}

export default function NtoStarPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-north-america" />;
}
