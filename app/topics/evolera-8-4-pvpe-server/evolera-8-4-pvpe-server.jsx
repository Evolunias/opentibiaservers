import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-pvpe-server');
}

export default function Evolera84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-pvpe-server" />;
}
