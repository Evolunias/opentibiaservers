import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-servers-poland');
}

export default function AlasteraEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-servers-poland" />;
}
