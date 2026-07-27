import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-brazil');
}

export default function DemolidoresPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-brazil" />;
}
