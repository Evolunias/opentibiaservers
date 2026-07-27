import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-enforced-server-sweden');
}

export default function MiraclePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-enforced-server-sweden" />;
}
