import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-pvpe-server');
}

export default function Cyntara71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-pvpe-server" />;
}
