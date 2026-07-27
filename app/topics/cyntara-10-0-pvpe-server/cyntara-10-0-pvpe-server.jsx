import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-pvpe-server');
}

export default function Cyntara100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-pvpe-server" />;
}
