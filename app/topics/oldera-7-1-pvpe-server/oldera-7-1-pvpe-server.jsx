import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-pvpe-server');
}

export default function Oldera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-pvpe-server" />;
}
