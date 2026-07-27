import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-private-server');
}

export default function BestMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-private-server" />;
}
