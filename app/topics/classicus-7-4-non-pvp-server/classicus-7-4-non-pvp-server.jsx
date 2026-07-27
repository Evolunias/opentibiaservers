import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-non-pvp-server');
}

export default function Classicus74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-non-pvp-server" />;
}
