import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-pvpe-server');
}

export default function Noxiousot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-pvpe-server" />;
}
