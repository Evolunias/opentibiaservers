import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ameria-server');
}

export default function PvpeAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ameria-server" />;
}
