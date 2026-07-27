import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-canada');
}

export default function PvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-canada" />;
}
