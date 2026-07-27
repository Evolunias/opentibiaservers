import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-mexico-servers');
}

export default function MidhemMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-mexico-servers" />;
}
