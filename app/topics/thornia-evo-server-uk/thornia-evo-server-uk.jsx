import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-uk');
}

export default function ThorniaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-uk" />;
}
