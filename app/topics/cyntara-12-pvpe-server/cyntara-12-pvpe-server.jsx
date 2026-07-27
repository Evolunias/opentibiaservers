import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-pvpe-server');
}

export default function Cyntara12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-pvpe-server" />;
}
