import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-infernal-ot-server');
}

export default function PvpeInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-infernal-ot-server" />;
}
