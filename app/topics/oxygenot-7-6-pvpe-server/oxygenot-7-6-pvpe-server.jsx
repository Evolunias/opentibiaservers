import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-pvpe-server');
}

export default function Oxygenot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-pvpe-server" />;
}
