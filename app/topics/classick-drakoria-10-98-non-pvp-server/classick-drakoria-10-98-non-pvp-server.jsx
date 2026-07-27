import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-non-pvp-server');
}

export default function ClassickDrakoria1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-non-pvp-server" />;
}
