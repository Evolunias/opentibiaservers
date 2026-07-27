import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-pvpe-server');
}

export default function Shadowcores96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-pvpe-server" />;
}
