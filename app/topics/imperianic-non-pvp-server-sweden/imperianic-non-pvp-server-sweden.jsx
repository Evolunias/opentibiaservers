import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-sweden');
}

export default function ImperianicNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-sweden" />;
}
