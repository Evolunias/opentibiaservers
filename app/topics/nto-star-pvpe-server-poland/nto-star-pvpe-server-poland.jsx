import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-poland');
}

export default function NtoStarPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-poland" />;
}
