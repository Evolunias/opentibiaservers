import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-private-server');
}

export default function CurrentNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-private-server" />;
}
