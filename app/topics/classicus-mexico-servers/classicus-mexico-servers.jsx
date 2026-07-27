import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-mexico-servers');
}

export default function ClassicusMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-mexico-servers" />;
}
