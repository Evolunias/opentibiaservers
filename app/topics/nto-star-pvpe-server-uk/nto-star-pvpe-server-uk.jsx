import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-uk');
}

export default function NtoStarPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-uk" />;
}
