import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-evo-server');
}

export default function ClassickDrakoria96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-evo-server" />;
}
