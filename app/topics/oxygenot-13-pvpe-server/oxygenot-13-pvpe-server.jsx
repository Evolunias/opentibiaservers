import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-pvpe-server');
}

export default function Oxygenot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-pvpe-server" />;
}
