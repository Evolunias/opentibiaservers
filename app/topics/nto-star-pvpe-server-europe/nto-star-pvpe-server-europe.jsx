import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-europe');
}

export default function NtoStarPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-europe" />;
}
