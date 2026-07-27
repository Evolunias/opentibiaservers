import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-servers-poland');
}

export default function ImperianicEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-servers-poland" />;
}
