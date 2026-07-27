import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-pvpe-server');
}

export default function HarmoniaOt12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-pvpe-server" />;
}
