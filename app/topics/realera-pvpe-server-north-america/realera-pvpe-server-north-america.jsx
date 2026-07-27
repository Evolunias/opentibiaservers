import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-north-america');
}

export default function RealeraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-north-america" />;
}
