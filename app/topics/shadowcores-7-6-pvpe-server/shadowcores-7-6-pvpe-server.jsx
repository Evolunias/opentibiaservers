import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-pvpe-server');
}

export default function Shadowcores76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-pvpe-server" />;
}
