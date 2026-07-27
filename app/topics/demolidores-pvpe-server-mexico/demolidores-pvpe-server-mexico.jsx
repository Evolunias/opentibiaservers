import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-mexico');
}

export default function DemolidoresPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-mexico" />;
}
