import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-servers-poland');
}

export default function ShadowcoresEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-servers-poland" />;
}
