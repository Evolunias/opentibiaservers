import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-uk');
}

export default function DemolidoresPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-uk" />;
}
