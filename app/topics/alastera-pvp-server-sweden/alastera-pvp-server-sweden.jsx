import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-sweden');
}

export default function AlasteraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-sweden" />;
}
