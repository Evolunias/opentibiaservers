import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-europe');
}

export default function RealeraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-europe" />;
}
