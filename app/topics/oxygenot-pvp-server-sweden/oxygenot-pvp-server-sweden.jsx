import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-sweden');
}

export default function OxygenotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-sweden" />;
}
