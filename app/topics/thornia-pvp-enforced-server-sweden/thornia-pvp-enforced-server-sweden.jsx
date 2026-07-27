import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-sweden');
}

export default function ThorniaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-sweden" />;
}
