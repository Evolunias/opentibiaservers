import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-pvpe-server');
}

export default function Cyntara80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-pvpe-server" />;
}
