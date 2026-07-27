import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-south-america');
}

export default function PvpeClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-south-america" />;
}
