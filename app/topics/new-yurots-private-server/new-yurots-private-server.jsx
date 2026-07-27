import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-private-server');
}

export default function NewYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-private-server" />;
}
