import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-pvpe-server');
}

export default function HarmoniaOt854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-pvpe-server" />;
}
