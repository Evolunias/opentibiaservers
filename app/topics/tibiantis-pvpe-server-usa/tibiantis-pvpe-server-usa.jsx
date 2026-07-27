import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-usa');
}

export default function TibiantisPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-usa" />;
}
