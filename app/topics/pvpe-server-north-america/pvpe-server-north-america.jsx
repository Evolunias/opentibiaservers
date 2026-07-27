import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-north-america');
}

export default function PvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-north-america" />;
}
