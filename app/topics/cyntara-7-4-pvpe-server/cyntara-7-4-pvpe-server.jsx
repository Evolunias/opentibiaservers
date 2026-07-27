import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-pvpe-server');
}

export default function Cyntara74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-pvpe-server" />;
}
