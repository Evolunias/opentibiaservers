import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-private-server');
}

export default function NewMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-private-server" />;
}
