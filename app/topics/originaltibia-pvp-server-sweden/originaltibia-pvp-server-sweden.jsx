import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-sweden');
}

export default function OriginaltibiaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-sweden" />;
}
