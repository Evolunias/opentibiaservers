import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-pvpe-server');
}

export default function Cyntara81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-pvpe-server" />;
}
