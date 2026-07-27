import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-poland');
}

export default function TibiantisEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-poland" />;
}
