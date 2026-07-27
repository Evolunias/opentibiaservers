import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-sweden');
}

export default function ShadowcoresPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-sweden" />;
}
