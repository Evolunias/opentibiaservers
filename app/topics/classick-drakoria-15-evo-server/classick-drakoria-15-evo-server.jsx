import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-evo-server');
}

export default function ClassickDrakoria15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-evo-server" />;
}
