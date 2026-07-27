import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-sweden');
}

export default function NepreniaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-sweden" />;
}
