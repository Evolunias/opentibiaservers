import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-evo-servers');
}

export default function ClassickDrakoria15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-evo-servers" />;
}
