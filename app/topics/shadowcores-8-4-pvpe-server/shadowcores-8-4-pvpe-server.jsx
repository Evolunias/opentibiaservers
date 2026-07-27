import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-pvpe-server');
}

export default function Shadowcores84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-pvpe-server" />;
}
