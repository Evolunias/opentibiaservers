import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-pvpe-server');
}

export default function Noxiousot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-pvpe-server" />;
}
