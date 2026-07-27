import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-pvpe-server');
}

export default function Oxygenot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-pvpe-server" />;
}
