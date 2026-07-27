import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-pvpe-server');
}

export default function Noxiousot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-pvpe-server" />;
}
