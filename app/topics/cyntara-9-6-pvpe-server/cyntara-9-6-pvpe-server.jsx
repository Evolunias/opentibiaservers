import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-pvpe-server');
}

export default function Cyntara96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-pvpe-server" />;
}
