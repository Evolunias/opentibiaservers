import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-north-america');
}

export default function PvpeClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-north-america" />;
}
