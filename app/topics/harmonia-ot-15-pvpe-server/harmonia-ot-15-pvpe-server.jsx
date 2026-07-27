import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-pvpe-server');
}

export default function HarmoniaOt15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-pvpe-server" />;
}
