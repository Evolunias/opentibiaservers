import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-canada');
}

export default function TibianusPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-canada" />;
}
