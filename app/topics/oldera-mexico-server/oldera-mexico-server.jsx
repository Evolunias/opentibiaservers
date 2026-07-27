import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-mexico-server');
}

export default function OlderaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-mexico-server" />;
}
