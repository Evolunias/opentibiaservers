import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-pvpe-server');
}

export default function Cyntara15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-pvpe-server" />;
}
