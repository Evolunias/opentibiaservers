import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-usa');
}

export default function HarmoniaOtPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-usa" />;
}
