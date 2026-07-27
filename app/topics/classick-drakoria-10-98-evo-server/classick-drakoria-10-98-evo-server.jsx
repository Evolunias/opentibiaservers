import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-evo-server');
}

export default function ClassickDrakoria1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-evo-server" />;
}
