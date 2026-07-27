import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-pvpe-server');
}

export default function Noxiousot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-pvpe-server" />;
}
