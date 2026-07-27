import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-pvpe-server');
}

export default function Unline96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-pvpe-server" />;
}
