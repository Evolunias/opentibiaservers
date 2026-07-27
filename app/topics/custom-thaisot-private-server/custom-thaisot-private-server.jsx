import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-private-server');
}

export default function CustomThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-private-server" />;
}
