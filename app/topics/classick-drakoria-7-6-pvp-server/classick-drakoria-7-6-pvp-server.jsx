import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-pvp-server');
}

export default function ClassickDrakoria76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-pvp-server" />;
}
