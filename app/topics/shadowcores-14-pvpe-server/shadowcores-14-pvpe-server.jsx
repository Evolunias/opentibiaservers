import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-pvpe-server');
}

export default function Shadowcores14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-pvpe-server" />;
}
