import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-pvpe-server');
}

export default function Cyntara86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-pvpe-server" />;
}
