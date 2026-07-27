import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-mexico-server');
}

export default function ThorniaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-mexico-server" />;
}
