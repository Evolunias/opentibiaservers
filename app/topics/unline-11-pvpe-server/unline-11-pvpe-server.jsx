import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-pvpe-server');
}

export default function Unline11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-pvpe-server" />;
}
