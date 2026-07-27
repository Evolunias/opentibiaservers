import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-argentina');
}

export default function ClassickDrakoriaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-argentina" />;
}
