import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-pvpe-server');
}

export default function NtoStar14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-pvpe-server" />;
}
