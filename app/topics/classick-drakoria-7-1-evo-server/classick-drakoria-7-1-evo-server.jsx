import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-evo-server');
}

export default function ClassickDrakoria71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-evo-server" />;
}
