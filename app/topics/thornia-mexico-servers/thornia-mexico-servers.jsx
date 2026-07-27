import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-mexico-servers');
}

export default function ThorniaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-mexico-servers" />;
}
