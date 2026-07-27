import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-private-server');
}

export default function MidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-private-server" />;
}
