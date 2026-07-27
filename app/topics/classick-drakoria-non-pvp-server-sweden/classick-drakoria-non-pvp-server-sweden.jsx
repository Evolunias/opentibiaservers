import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-sweden');
}

export default function ClassickDrakoriaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-sweden" />;
}
