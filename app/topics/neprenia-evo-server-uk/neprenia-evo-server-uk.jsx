import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-uk');
}

export default function NepreniaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-uk" />;
}
