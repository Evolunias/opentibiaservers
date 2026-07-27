import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-pvpe-server');
}

export default function Oldera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-pvpe-server" />;
}
