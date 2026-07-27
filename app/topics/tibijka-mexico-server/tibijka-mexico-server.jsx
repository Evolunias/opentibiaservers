import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-mexico-server');
}

export default function TibijkaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-mexico-server" />;
}
