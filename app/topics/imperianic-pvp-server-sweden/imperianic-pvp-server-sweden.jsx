import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-sweden');
}

export default function ImperianicPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-sweden" />;
}
