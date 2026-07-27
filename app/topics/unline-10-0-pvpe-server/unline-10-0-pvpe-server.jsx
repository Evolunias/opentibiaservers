import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-pvpe-server');
}

export default function Unline100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-pvpe-server" />;
}
