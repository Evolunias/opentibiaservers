import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-sweden');
}

export default function ClassicusPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-sweden" />;
}
