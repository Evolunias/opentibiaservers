import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-non-pvp-server');
}

export default function Classicus12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-non-pvp-server" />;
}
