import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-europe');
}

export default function ImperianicEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-europe" />;
}
