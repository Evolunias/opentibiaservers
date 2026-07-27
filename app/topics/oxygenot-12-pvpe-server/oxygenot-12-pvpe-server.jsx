import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-pvpe-server');
}

export default function Oxygenot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-pvpe-server" />;
}
