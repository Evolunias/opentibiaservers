import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-germany');
}

export default function PvpeOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-germany" />;
}
