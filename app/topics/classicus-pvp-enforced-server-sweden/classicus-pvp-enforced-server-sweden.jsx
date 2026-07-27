import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-sweden');
}

export default function ClassicusPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-sweden" />;
}
