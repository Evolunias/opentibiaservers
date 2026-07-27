import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-pvp-server');
}

export default function ClassickDrakoria14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-pvp-server" />;
}
