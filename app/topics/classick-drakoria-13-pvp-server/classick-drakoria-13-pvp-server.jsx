import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-pvp-server');
}

export default function ClassickDrakoria13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-pvp-server" />;
}
