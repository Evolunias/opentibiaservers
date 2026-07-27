import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-sweden');
}

export default function TibiascapePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-sweden" />;
}
