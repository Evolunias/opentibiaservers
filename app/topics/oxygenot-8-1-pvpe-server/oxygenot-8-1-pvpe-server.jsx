import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-pvpe-server');
}

export default function Oxygenot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-pvpe-server" />;
}
