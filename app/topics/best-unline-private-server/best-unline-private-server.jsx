import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-private-server');
}

export default function BestUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-unline-private-server" />;
}
