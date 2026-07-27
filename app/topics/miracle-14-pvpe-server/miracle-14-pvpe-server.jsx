import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-pvpe-server');
}

export default function Miracle14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-pvpe-server" />;
}
