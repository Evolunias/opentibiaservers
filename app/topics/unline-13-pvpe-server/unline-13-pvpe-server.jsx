import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-pvpe-server');
}

export default function Unline13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-pvpe-server" />;
}
