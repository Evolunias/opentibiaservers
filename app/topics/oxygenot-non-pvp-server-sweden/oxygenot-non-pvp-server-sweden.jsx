import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-sweden');
}

export default function OxygenotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-sweden" />;
}
