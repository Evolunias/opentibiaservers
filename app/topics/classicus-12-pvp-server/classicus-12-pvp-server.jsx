import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-pvp-server');
}

export default function Classicus12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-pvp-server" />;
}
