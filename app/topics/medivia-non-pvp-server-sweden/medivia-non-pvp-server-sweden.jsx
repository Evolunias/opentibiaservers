import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-sweden');
}

export default function MediviaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-sweden" />;
}
