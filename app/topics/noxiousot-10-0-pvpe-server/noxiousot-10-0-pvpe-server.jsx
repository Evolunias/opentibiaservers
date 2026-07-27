import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-pvpe-server');
}

export default function Noxiousot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-pvpe-server" />;
}
