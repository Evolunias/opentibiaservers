import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-pvpe-server');
}

export default function Cyntara1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-pvpe-server" />;
}
