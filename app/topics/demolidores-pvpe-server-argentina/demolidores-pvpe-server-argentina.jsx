import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-argentina');
}

export default function DemolidoresPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-argentina" />;
}
