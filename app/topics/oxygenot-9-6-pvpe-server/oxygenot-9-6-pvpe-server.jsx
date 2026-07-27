import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-pvpe-server');
}

export default function Oxygenot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-pvpe-server" />;
}
