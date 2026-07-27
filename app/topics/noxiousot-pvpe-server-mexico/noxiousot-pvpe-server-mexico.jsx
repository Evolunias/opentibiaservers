import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-mexico');
}

export default function NoxiousotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-mexico" />;
}
