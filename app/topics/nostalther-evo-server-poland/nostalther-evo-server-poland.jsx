import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-poland');
}

export default function NostaltherEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-poland" />;
}
