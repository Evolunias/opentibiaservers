import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-europe');
}

export default function ThorniaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-europe" />;
}
