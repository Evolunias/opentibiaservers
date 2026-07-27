import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-pvpe-server');
}

export default function Noxiousot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-pvpe-server" />;
}
