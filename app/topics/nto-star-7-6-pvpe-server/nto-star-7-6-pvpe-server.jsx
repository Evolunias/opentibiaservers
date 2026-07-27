import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-pvpe-server');
}

export default function NtoStar76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-pvpe-server" />;
}
