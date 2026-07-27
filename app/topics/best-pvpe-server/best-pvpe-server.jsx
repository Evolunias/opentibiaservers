import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-pvpe-server');
}

export default function BestPvpeServerKeywordPage() {
  return <StaticKeywordPage slug="best-pvpe-server" />;
}
