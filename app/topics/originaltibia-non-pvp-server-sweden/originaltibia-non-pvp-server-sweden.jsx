import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-sweden');
}

export default function OriginaltibiaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-sweden" />;
}
