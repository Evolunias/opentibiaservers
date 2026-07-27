import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-pvpe-server');
}

export default function NtoStar12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-pvpe-server" />;
}
