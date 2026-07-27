import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-north-america');
}

export default function RealestaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-north-america" />;
}
