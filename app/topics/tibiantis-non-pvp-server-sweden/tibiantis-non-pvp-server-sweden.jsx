import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-sweden');
}

export default function TibiantisNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-sweden" />;
}
