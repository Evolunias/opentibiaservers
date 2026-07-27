import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-mexico');
}

export default function TibianusPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-mexico" />;
}
