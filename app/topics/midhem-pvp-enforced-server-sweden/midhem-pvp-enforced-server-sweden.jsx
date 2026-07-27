import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-sweden');
}

export default function MidhemPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-sweden" />;
}
