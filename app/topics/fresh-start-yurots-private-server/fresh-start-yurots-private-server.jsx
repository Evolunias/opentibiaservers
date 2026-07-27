import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-private-server');
}

export default function FreshStartYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-private-server" />;
}
