import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-uk');
}

export default function ClassicusPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-uk" />;
}
