import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-evo-server');
}

export default function ClassickDrakoria11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-evo-server" />;
}
