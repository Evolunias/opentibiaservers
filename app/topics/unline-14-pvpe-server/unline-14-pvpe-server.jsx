import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-pvpe-server');
}

export default function Unline14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-pvpe-server" />;
}
