import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-private-server');
}

export default function CurrentKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-private-server" />;
}
