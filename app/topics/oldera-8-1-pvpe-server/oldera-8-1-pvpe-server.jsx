import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-pvpe-server');
}

export default function Oldera81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-pvpe-server" />;
}
