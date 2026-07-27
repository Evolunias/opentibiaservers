import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-france');
}

export default function AlasteraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-france" />;
}
