import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-pvpe-server');
}

export default function Classicus15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-pvpe-server" />;
}
