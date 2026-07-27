import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-pvpe-server');
}

export default function Oldera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-pvpe-server" />;
}
