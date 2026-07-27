import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-usa');
}

export default function PvpeOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-usa" />;
}
