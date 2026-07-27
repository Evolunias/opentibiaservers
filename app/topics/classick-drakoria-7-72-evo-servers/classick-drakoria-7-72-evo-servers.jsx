import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-evo-servers');
}

export default function ClassickDrakoria772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-evo-servers" />;
}
