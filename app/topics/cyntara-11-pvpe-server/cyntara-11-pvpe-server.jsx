import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-pvpe-server');
}

export default function Cyntara11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-pvpe-server" />;
}
