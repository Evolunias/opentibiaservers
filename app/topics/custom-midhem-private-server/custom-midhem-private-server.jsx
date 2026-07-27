import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-private-server');
}

export default function CustomMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-private-server" />;
}
