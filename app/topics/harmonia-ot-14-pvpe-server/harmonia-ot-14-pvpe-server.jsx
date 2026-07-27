import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-pvpe-server');
}

export default function HarmoniaOt14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-pvpe-server" />;
}
