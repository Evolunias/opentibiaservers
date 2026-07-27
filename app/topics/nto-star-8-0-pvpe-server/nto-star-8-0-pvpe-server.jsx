import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-pvpe-server');
}

export default function NtoStar80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-pvpe-server" />;
}
