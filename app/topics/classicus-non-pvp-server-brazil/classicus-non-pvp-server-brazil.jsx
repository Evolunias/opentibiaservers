import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-brazil');
}

export default function ClassicusNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-brazil" />;
}
