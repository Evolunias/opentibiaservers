import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-servers-brazil');
}

export default function NostaltherEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-servers-brazil" />;
}
