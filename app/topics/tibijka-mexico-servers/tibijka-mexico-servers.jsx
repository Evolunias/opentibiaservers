import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-mexico-servers');
}

export default function TibijkaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-mexico-servers" />;
}
