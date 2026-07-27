import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-poland');
}

export default function ThorniaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-poland" />;
}
