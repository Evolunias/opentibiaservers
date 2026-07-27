import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-north-america');
}

export default function TibiantisPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-north-america" />;
}
