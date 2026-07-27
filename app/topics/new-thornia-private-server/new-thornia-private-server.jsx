import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-private-server');
}

export default function NewThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-private-server" />;
}
