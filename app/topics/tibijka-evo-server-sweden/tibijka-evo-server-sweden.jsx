import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-sweden');
}

export default function TibijkaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-sweden" />;
}
