import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-pvpe-server');
}

export default function Oldera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-pvpe-server" />;
}
