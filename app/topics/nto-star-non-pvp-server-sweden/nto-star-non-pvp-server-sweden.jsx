import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-sweden');
}

export default function NtoStarNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-sweden" />;
}
