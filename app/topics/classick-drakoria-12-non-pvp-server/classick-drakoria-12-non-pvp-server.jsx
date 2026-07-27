import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-non-pvp-server');
}

export default function ClassickDrakoria12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-non-pvp-server" />;
}
