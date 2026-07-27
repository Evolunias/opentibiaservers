import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-usa');
}

export default function ClassicusPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-usa" />;
}
