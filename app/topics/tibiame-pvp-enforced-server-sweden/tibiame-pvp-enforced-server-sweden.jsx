import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-sweden');
}

export default function TibiamePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-sweden" />;
}
