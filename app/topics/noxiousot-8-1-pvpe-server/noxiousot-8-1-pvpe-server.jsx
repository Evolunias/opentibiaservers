import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-pvpe-server');
}

export default function Noxiousot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-pvpe-server" />;
}
