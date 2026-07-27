import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-brazil');
}

export default function HarmoniaOtPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-brazil" />;
}
