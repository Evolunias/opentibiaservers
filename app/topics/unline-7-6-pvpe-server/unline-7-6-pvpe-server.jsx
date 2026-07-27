import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-pvpe-server');
}

export default function Unline76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-pvpe-server" />;
}
