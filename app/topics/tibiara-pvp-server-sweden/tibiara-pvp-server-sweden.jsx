import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-sweden');
}

export default function TibiaraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-sweden" />;
}
