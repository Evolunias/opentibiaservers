import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-brazil');
}

export default function NostaltherEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-brazil" />;
}
