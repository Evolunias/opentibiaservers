import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-poland');
}

export default function DemolidoresPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-poland" />;
}
