import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-pvpe-server');
}

export default function Oldera12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-pvpe-server" />;
}
