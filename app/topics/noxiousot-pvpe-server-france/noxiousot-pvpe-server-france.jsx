import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-france');
}

export default function NoxiousotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-france" />;
}
