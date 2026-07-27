import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-mexico-server');
}

export default function TibiascapeMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-mexico-server" />;
}
