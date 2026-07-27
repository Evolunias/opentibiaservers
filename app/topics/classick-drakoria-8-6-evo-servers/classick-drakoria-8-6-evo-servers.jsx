import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-evo-servers');
}

export default function ClassickDrakoria86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-evo-servers" />;
}
