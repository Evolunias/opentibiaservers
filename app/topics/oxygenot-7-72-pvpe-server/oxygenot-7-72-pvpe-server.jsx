import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-pvpe-server');
}

export default function Oxygenot772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-pvpe-server" />;
}
