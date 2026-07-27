import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-pvp-server');
}

export default function Classicus86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-pvp-server" />;
}
