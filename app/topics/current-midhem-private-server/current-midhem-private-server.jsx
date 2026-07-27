import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-private-server');
}

export default function CurrentMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-private-server" />;
}
