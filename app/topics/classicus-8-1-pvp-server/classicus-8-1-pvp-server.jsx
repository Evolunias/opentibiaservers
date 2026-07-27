import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-pvp-server');
}

export default function Classicus81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-pvp-server" />;
}
