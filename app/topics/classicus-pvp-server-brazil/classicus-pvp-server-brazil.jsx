import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-brazil');
}

export default function ClassicusPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-brazil" />;
}
