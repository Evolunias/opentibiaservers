import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-private-server');
}

export default function CurrentNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-private-server" />;
}
