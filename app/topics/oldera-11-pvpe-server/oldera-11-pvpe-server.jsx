import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-pvpe-server');
}

export default function Oldera11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-pvpe-server" />;
}
