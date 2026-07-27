import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-private-server');
}

export default function BestThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-private-server" />;
}
