import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-sweden');
}

export default function UnlineNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-sweden" />;
}
