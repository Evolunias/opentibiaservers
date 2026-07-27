import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-sweden');
}

export default function NonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-sweden" />;
}
