import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-brazil');
}

export default function NtoStarPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-brazil" />;
}
