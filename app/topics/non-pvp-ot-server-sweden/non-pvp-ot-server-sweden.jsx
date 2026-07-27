import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-sweden');
}

export default function NonPvpOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-sweden" />;
}
