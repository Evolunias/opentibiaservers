import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-servers-poland');
}

export default function NostaltherEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-servers-poland" />;
}
