import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-pvp-server');
}

export default function ClassickDrakoria854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-pvp-server" />;
}
