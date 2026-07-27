import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-usa');
}

export default function DemolidoresPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-usa" />;
}
