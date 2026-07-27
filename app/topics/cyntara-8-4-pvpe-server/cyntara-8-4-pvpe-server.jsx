import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-pvpe-server');
}

export default function Cyntara84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-pvpe-server" />;
}
