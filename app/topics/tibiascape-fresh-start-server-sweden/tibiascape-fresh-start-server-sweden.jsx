import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-sweden');
}

export default function TibiascapeFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-sweden" />;
}
