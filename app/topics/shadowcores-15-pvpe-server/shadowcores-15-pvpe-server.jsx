import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-pvpe-server');
}

export default function Shadowcores15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-pvpe-server" />;
}
