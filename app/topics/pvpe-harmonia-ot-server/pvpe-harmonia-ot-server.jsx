import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-harmonia-ot-server');
}

export default function PvpeHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-harmonia-ot-server" />;
}
