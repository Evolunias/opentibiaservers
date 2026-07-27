import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-south-america');
}

export default function NoxiousotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-south-america" />;
}
