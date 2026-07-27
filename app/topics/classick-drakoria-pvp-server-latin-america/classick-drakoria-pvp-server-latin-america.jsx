import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-latin-america');
}

export default function ClassickDrakoriaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-latin-america" />;
}
