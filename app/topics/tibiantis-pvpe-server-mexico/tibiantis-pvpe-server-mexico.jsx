import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-mexico');
}

export default function TibiantisPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-mexico" />;
}
