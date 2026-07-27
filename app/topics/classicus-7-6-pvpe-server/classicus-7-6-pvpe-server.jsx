import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-pvpe-server');
}

export default function Classicus76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-pvpe-server" />;
}
