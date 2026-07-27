import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-sweden');
}

export default function MediviaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-sweden" />;
}
