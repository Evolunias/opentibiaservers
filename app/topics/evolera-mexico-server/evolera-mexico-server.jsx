import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-mexico-server');
}

export default function EvoleraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-mexico-server" />;
}
