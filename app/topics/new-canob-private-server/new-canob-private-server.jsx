import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-private-server');
}

export default function NewCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-canob-private-server" />;
}
