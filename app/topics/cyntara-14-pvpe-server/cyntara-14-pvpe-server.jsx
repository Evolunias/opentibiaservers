import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-pvpe-server');
}

export default function Cyntara14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-pvpe-server" />;
}
