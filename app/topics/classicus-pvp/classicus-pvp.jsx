import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp');
}

export default function ClassicusPvpKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp" />;
}
