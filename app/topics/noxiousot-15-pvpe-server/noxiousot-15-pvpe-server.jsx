import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-pvpe-server');
}

export default function Noxiousot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-pvpe-server" />;
}
