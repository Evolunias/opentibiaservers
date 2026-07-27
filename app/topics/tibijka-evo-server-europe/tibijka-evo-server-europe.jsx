import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-europe');
}

export default function TibijkaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-europe" />;
}
