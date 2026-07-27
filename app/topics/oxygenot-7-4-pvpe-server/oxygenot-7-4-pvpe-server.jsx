import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-pvpe-server');
}

export default function Oxygenot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-pvpe-server" />;
}
