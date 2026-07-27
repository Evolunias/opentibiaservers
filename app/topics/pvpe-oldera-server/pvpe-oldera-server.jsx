import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-oldera-server');
}

export default function PvpeOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-oldera-server" />;
}
