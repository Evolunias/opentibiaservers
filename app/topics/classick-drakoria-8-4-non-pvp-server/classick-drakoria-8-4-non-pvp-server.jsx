import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-non-pvp-server');
}

export default function ClassickDrakoria84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-non-pvp-server" />;
}
