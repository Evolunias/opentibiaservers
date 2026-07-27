import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-98-pvp-server');
}

export default function Classicus1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-98-pvp-server" />;
}
