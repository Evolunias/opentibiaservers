import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-poland');
}

export default function RealeraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-poland" />;
}
