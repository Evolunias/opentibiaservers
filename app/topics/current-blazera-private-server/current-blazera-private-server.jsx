import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-private-server');
}

export default function CurrentBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-private-server" />;
}
