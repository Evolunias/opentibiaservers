import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-private-server');
}

export default function CurrentMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-private-server" />;
}
