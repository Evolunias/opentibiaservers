import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-pvpe-server');
}

export default function Oxygenot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-pvpe-server" />;
}
