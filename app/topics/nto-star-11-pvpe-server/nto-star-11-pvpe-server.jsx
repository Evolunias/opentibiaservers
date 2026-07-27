import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-pvpe-server');
}

export default function NtoStar11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-pvpe-server" />;
}
