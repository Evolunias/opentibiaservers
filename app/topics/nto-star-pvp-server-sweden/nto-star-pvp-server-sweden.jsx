import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-sweden');
}

export default function NtoStarPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-sweden" />;
}
