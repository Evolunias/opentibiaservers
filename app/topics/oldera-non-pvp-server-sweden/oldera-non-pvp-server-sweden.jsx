import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-sweden');
}

export default function OlderaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-sweden" />;
}
