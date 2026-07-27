import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-south-america');
}

export default function TibianusPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-south-america" />;
}
