import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-pvpe-server');
}

export default function Cyntara13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-pvpe-server" />;
}
