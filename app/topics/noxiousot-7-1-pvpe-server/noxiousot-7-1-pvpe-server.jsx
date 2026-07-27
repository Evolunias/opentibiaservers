import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-pvpe-server');
}

export default function Noxiousot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-pvpe-server" />;
}
