import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-sweden');
}

export default function NepreniaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-sweden" />;
}
