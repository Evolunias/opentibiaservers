import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-private-server');
}

export default function FreshStartThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-private-server" />;
}
