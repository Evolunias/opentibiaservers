import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-pvpe-server');
}

export default function Shadowcores772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-pvpe-server" />;
}
