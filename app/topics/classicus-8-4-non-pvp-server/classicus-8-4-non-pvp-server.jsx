import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-non-pvp-server');
}

export default function Classicus84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-non-pvp-server" />;
}
