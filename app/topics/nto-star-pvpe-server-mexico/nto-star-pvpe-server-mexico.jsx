import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-mexico');
}

export default function NtoStarPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-mexico" />;
}
