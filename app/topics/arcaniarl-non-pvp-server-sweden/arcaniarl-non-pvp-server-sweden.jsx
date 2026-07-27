import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-sweden');
}

export default function ArcaniarlNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-sweden" />;
}
