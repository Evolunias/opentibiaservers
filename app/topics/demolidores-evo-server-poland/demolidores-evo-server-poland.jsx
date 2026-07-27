import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-poland');
}

export default function DemolidoresEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-poland" />;
}
