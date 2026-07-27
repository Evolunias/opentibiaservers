import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-pvpe-server');
}

export default function Classicus13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-pvpe-server" />;
}
