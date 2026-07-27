import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-servers-poland');
}

export default function RealestaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-servers-poland" />;
}
