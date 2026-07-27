import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-sweden');
}

export default function TibiantisEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-sweden" />;
}
