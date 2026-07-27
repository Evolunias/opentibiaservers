import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-poland');
}

export default function OxygenotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-poland" />;
}
