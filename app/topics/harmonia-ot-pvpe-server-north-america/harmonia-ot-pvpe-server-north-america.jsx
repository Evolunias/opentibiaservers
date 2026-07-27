import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-north-america');
}

export default function HarmoniaOtPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-north-america" />;
}
