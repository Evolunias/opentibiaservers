import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-mexico-servers');
}

export default function TibiascapeMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-mexico-servers" />;
}
