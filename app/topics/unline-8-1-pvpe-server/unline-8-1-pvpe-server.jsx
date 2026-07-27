import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-pvpe-server');
}

export default function Unline81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-pvpe-server" />;
}
