import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-pvpe-server');
}

export default function Unline15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-pvpe-server" />;
}
