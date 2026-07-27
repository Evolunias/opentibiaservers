import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-mexico-servers');
}

export default function EvoleraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-mexico-servers" />;
}
