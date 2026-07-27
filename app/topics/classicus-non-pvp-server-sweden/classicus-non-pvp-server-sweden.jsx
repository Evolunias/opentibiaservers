import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-sweden');
}

export default function ClassicusNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-sweden" />;
}
