import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-pvpe-server');
}

export default function Noxiousot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-pvpe-server" />;
}
