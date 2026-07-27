import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-evo-servers');
}

export default function ClassickDrakoria71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-evo-servers" />;
}
