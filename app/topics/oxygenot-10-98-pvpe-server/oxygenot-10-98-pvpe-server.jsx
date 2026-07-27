import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-98-pvpe-server');
}

export default function Oxygenot1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-98-pvpe-server" />;
}
