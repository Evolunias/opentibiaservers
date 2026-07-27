import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-mexico-servers');
}

export default function ClassickDrakoriaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-mexico-servers" />;
}
