import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-north-america');
}

export default function NoxiousotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-north-america" />;
}
