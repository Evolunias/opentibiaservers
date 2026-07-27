import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-france');
}

export default function DemolidoresPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-france" />;
}
