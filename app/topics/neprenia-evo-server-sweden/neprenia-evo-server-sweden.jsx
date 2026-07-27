import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-sweden');
}

export default function NepreniaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-sweden" />;
}
