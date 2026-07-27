import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-non-pvp-server');
}

export default function Classicus11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-non-pvp-server" />;
}
