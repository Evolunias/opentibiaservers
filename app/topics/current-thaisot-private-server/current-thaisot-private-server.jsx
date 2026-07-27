import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-private-server');
}

export default function CurrentThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-private-server" />;
}
