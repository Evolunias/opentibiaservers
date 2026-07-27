import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-france');
}

export default function ClassicusNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-france" />;
}
