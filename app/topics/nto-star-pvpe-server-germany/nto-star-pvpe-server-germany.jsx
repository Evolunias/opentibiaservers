import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-germany');
}

export default function NtoStarPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-germany" />;
}
