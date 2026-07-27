import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-sweden');
}

export default function MidhemPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-sweden" />;
}
