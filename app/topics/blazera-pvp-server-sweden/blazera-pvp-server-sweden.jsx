import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-sweden');
}

export default function BlazeraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-sweden" />;
}
