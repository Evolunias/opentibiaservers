import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-mexico');
}

export default function ClassicusPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-mexico" />;
}
