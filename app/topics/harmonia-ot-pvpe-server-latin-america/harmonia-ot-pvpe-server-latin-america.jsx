import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-latin-america');
}

export default function HarmoniaOtPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-latin-america" />;
}
