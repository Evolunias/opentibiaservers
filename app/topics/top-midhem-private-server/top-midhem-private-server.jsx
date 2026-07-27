import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-private-server');
}

export default function TopMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-private-server" />;
}
