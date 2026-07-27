import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-europe');
}

export default function DemolidoresPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-europe" />;
}
