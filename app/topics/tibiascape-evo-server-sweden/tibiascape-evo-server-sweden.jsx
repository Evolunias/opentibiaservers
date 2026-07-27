import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-sweden');
}

export default function TibiascapeEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-sweden" />;
}
