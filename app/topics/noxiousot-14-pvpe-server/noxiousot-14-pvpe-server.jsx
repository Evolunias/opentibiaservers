import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-pvpe-server');
}

export default function Noxiousot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-pvpe-server" />;
}
