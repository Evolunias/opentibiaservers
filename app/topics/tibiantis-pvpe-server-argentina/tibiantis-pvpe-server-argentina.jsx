import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-argentina');
}

export default function TibiantisPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-argentina" />;
}
