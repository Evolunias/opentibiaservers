import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-north-america');
}

export default function TibianusPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-north-america" />;
}
