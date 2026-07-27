import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-sweden');
}

export default function AlasteraNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-sweden" />;
}
