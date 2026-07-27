import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-brazil');
}

export default function PvpeOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-brazil" />;
}
