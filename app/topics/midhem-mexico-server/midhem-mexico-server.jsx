import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-mexico-server');
}

export default function MidhemMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-mexico-server" />;
}
