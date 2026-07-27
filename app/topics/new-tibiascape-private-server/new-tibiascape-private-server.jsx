import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-private-server');
}

export default function NewTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-private-server" />;
}
