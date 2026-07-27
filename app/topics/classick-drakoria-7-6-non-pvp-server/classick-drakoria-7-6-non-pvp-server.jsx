import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-non-pvp-server');
}

export default function ClassickDrakoria76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-non-pvp-server" />;
}
