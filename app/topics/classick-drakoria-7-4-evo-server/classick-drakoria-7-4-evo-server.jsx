import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-evo-server');
}

export default function ClassickDrakoria74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-evo-server" />;
}
