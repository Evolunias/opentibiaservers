import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-france');
}

export default function ClassicusPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-france" />;
}
