import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-sweden');
}

export default function MidhemNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-sweden" />;
}
