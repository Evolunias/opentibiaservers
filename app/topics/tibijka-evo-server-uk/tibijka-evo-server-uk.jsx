import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-uk');
}

export default function TibijkaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-uk" />;
}
