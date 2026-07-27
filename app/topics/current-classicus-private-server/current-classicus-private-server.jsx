import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-private-server');
}

export default function CurrentClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-private-server" />;
}
