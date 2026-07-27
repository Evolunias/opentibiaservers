import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-france');
}

export default function HarmoniaOtPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-france" />;
}
