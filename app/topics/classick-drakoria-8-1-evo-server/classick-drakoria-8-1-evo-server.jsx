import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-evo-server');
}

export default function ClassickDrakoria81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-evo-server" />;
}
