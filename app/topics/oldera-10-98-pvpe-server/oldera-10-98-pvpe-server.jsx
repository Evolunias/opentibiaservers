import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-pvpe-server');
}

export default function Oldera1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-pvpe-server" />;
}
