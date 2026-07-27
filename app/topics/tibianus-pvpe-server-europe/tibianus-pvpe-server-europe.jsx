import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-europe');
}

export default function TibianusPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-europe" />;
}
