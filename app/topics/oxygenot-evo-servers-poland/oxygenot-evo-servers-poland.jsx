import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-servers-poland');
}

export default function OxygenotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-servers-poland" />;
}
