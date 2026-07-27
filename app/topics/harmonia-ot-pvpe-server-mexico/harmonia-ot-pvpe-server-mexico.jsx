import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-mexico');
}

export default function HarmoniaOtPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-mexico" />;
}
