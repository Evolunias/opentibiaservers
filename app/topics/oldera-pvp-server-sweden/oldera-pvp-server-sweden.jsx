import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-sweden');
}

export default function OlderaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-sweden" />;
}
