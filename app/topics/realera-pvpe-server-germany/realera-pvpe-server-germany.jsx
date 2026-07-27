import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-germany');
}

export default function RealeraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-germany" />;
}
