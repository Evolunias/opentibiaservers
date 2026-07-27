import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-europe');
}

export default function HarmoniaOtPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-europe" />;
}
