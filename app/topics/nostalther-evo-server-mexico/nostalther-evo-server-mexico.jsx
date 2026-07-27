import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-mexico');
}

export default function NostaltherEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-mexico" />;
}
