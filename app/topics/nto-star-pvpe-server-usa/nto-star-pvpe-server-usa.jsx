import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-usa');
}

export default function NtoStarPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-usa" />;
}
