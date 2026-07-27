import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-sweden');
}

export default function TibiascapeBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-sweden" />;
}
