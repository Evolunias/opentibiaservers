import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-pvp-server');
}

export default function ClassickDrakoria772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-pvp-server" />;
}
