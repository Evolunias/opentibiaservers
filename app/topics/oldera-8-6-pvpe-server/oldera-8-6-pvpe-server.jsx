import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-pvpe-server');
}

export default function Oldera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-pvpe-server" />;
}
