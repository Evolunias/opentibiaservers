import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-pvpe-server');
}

export default function Oxygenot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-pvpe-server" />;
}
