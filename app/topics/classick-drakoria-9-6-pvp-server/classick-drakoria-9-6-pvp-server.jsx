import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-pvp-server');
}

export default function ClassickDrakoria96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-pvp-server" />;
}
