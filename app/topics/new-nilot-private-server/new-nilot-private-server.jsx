import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-private-server');
}

export default function NewNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-private-server" />;
}
