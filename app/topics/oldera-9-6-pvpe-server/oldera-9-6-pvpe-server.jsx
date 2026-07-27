import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-pvpe-server');
}

export default function Oldera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-pvpe-server" />;
}
