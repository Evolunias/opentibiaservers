import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-mexico');
}

export default function RealeraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-mexico" />;
}
