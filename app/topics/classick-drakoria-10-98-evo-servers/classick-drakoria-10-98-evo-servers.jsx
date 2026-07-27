import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-evo-servers');
}

export default function ClassickDrakoria1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-evo-servers" />;
}
