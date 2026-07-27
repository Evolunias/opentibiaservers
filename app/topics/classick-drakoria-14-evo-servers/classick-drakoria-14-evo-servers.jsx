import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-evo-servers');
}

export default function ClassickDrakoria14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-evo-servers" />;
}
