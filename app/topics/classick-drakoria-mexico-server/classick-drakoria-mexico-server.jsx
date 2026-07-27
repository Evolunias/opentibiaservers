import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-mexico-server');
}

export default function ClassickDrakoriaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-mexico-server" />;
}
