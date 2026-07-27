import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-latin-america');
}

export default function ClassicusPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-latin-america" />;
}
