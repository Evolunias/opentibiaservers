import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-servers-poland');
}

export default function ThorniaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-servers-poland" />;
}
