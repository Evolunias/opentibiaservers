import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-mexico');
}

export default function RealestaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-mexico" />;
}
