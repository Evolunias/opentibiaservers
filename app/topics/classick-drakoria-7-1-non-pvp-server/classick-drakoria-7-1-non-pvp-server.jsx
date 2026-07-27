import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-non-pvp-server');
}

export default function ClassickDrakoria71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-non-pvp-server" />;
}
