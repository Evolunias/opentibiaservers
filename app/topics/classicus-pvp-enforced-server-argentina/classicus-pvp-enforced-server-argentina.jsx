import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-argentina');
}

export default function ClassicusPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-argentina" />;
}
