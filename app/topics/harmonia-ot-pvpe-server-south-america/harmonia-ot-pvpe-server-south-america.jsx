import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-south-america');
}

export default function HarmoniaOtPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-south-america" />;
}
