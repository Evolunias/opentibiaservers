import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-south-america');
}

export default function PvpeOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-south-america" />;
}
