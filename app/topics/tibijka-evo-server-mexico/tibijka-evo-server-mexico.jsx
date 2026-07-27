import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-mexico');
}

export default function TibijkaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-mexico" />;
}
