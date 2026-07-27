import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-private-server');
}

export default function TopThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-private-server" />;
}
