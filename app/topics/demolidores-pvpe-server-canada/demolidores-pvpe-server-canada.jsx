import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-canada');
}

export default function DemolidoresPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-canada" />;
}
