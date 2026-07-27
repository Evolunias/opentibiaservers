import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-canada');
}

export default function PvpeOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-canada" />;
}
