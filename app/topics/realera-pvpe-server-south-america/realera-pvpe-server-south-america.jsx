import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-south-america');
}

export default function RealeraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-south-america" />;
}
