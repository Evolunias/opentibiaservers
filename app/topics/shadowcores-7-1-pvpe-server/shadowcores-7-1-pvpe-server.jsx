import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-pvpe-server');
}

export default function Shadowcores71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-pvpe-server" />;
}
