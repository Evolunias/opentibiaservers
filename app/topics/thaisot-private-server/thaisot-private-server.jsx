import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-private-server');
}

export default function ThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-private-server" />;
}
