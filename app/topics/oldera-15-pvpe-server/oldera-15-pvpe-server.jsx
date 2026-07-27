import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-pvpe-server');
}

export default function Oldera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-pvpe-server" />;
}
