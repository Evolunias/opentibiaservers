import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-poland');
}

export default function RealestaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-poland" />;
}
