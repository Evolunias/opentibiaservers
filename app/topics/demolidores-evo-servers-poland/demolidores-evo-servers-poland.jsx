import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-servers-poland');
}

export default function DemolidoresEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-servers-poland" />;
}
