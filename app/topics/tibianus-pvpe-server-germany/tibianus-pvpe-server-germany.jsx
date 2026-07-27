import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-germany');
}

export default function TibianusPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-germany" />;
}
