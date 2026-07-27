import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-pvpe-server');
}

export default function Unline71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-pvpe-server" />;
}
