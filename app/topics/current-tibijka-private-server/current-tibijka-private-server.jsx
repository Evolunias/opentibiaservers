import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-private-server');
}

export default function CurrentTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-private-server" />;
}
