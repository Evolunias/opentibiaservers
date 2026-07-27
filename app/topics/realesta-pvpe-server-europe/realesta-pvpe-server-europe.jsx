import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-europe');
}

export default function RealestaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-europe" />;
}
