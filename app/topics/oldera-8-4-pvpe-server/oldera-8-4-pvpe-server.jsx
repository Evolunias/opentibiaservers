import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-pvpe-server');
}

export default function Oldera84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-pvpe-server" />;
}
