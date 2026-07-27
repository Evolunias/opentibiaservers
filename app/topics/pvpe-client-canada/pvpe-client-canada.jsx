import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-canada');
}

export default function PvpeClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-canada" />;
}
