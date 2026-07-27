import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-south-america');
}

export default function RealestaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-south-america" />;
}
