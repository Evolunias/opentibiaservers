import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-france');
}

export default function TibiantisPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-france" />;
}
