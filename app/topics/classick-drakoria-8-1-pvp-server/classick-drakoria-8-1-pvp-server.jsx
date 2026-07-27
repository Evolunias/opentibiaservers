import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-pvp-server');
}

export default function ClassickDrakoria81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-pvp-server" />;
}
