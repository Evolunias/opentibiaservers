import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-pvp-server');
}

export default function ClassickDrakoria71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-pvp-server" />;
}
