import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-pvpe-server');
}

export default function Oldera854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-pvpe-server" />;
}
