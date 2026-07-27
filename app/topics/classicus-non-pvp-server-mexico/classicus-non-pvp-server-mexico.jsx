import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-mexico');
}

export default function ClassicusNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-mexico" />;
}
