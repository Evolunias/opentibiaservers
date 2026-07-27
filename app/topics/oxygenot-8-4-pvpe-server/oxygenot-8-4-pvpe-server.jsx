import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-pvpe-server');
}

export default function Oxygenot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-pvpe-server" />;
}
