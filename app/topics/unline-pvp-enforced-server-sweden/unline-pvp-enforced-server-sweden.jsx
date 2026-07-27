import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-sweden');
}

export default function UnlinePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-sweden" />;
}
