import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-argentina');
}

export default function NtoStarPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-argentina" />;
}
