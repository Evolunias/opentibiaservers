import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-sweden');
}

export default function SabrehavenPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-sweden" />;
}
