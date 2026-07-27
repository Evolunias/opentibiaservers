import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-pvp-server');
}

export default function ClassickDrakoria15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-pvp-server" />;
}
