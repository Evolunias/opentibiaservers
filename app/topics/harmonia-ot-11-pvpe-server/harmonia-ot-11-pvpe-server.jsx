import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-pvpe-server');
}

export default function HarmoniaOt11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-pvpe-server" />;
}
