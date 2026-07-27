import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-poland');
}

export default function RealestaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-poland" />;
}
