import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-pvpe-server');
}

export default function NtoStar15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-pvpe-server" />;
}
