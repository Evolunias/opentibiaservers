import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-pvpe-server');
}

export default function Classicus854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-pvpe-server" />;
}
