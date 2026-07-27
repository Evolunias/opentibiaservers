import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-usa');
}

export default function TibianusPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-usa" />;
}
