import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-pvpe-server');
}

export default function Oldera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-pvpe-server" />;
}
