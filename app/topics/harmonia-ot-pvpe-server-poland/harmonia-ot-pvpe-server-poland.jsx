import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-poland');
}

export default function HarmoniaOtPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-poland" />;
}
