import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-private-server');
}

export default function CurrentUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-unline-private-server" />;
}
