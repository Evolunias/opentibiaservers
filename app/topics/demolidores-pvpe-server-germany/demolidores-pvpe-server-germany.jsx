import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-germany');
}

export default function DemolidoresPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-germany" />;
}
