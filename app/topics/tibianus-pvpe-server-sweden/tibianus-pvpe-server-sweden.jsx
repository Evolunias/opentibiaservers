import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-sweden');
}

export default function TibianusPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-sweden" />;
}
