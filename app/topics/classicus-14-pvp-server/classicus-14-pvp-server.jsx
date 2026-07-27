import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-pvp-server');
}

export default function Classicus14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-pvp-server" />;
}
