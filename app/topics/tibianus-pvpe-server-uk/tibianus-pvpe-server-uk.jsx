import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-uk');
}

export default function TibianusPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-uk" />;
}
