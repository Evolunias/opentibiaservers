import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-germany');
}

export default function RealestaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-germany" />;
}
