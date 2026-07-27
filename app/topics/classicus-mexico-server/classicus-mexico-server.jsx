import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-mexico-server');
}

export default function ClassicusMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-mexico-server" />;
}
