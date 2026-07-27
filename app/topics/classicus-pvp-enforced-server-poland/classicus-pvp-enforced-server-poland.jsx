import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-poland');
}

export default function ClassicusPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-poland" />;
}
