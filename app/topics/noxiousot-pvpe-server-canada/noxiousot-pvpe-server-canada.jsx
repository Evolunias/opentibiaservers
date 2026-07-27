import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-canada');
}

export default function NoxiousotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-canada" />;
}
