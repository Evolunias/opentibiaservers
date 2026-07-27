import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-pvpe-server');
}

export default function NtoStar71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-pvpe-server" />;
}
