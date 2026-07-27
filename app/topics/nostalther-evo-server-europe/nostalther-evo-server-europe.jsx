import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-europe');
}

export default function NostaltherEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-europe" />;
}
