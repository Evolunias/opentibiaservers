import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-pvpe-server');
}

export default function Oldera100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-pvpe-server" />;
}
