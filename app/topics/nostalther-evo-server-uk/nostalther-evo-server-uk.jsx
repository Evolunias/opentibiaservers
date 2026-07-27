import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-uk');
}

export default function NostaltherEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-uk" />;
}
