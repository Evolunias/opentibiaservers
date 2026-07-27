import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-uk');
}

export default function PvpeOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-uk" />;
}
