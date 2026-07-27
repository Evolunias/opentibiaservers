import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-sweden');
}

export default function ThaisotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-sweden" />;
}
