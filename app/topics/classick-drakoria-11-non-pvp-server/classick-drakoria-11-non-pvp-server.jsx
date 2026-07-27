import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-non-pvp-server');
}

export default function ClassickDrakoria11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-non-pvp-server" />;
}
