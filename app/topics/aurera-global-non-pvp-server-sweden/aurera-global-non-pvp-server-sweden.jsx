import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-sweden');
}

export default function AureraGlobalNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-sweden" />;
}
