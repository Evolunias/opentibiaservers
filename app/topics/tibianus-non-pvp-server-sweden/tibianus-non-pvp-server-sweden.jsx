import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-sweden');
}

export default function TibianusNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-sweden" />;
}
