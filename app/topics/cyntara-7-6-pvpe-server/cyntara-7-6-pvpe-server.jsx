import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-pvpe-server');
}

export default function Cyntara76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-pvpe-server" />;
}
