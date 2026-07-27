import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-mexico-servers');
}

export default function OlderaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-mexico-servers" />;
}
