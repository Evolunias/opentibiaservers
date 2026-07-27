import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-pvp-server');
}

export default function ClassickDrakoria11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-pvp-server" />;
}
