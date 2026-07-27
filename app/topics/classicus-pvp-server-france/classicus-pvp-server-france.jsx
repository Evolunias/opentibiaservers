import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-france');
}

export default function ClassicusPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-france" />;
}
