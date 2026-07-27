import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-private-server');
}

export default function NewThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-private-server" />;
}
