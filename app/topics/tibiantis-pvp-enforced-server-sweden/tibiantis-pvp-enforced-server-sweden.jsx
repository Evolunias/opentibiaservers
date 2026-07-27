import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-sweden');
}

export default function TibiantisPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-sweden" />;
}
