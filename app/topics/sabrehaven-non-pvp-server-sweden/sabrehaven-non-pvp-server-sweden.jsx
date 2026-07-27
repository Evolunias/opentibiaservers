import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-sweden');
}

export default function SabrehavenNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-sweden" />;
}
