import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-pvpe-server');
}

export default function Oxygenot86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-pvpe-server" />;
}
