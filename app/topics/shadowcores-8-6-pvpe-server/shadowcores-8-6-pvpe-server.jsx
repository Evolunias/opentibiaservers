import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-pvpe-server');
}

export default function Shadowcores86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-pvpe-server" />;
}
