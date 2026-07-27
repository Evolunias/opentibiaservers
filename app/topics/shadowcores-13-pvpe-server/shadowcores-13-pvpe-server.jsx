import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-pvpe-server');
}

export default function Shadowcores13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-pvpe-server" />;
}
