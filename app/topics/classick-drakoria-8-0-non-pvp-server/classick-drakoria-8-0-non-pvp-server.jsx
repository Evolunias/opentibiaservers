import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-non-pvp-server');
}

export default function ClassickDrakoria80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-non-pvp-server" />;
}
