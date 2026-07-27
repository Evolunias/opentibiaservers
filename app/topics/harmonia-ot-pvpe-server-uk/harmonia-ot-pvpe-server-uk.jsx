import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-uk');
}

export default function HarmoniaOtPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-uk" />;
}
