import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-poland');
}

export default function TibianusPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-poland" />;
}
