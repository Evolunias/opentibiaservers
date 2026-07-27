import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-sweden');
}

export default function ThaisotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-sweden" />;
}
