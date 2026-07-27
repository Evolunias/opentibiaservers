import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-private-server');
}

export default function ActiveThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-private-server" />;
}
