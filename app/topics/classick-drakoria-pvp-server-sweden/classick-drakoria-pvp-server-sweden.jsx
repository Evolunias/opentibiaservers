import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-sweden');
}

export default function ClassickDrakoriaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-sweden" />;
}
