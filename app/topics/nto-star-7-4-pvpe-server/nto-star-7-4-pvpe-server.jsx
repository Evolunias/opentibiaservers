import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-pvpe-server');
}

export default function NtoStar74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-pvpe-server" />;
}
