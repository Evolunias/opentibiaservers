import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-brazil');
}

export default function TibianusPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-brazil" />;
}
