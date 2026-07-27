import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-pvpe-server');
}

export default function Oldera80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-pvpe-server" />;
}
