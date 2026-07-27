import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-canada');
}

export default function TibiantisPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-canada" />;
}
