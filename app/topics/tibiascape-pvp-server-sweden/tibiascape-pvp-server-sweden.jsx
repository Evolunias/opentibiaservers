import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-sweden');
}

export default function TibiascapePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-sweden" />;
}
