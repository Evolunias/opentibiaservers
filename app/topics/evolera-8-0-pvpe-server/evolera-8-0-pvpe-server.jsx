import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-pvpe-server');
}

export default function Evolera80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-pvpe-server" />;
}
