import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-evo-server');
}

export default function ClassickDrakoria100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-evo-server" />;
}
