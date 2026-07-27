import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-north-america');
}

export default function PvpeOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-north-america" />;
}
