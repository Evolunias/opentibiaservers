import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-europe');
}

export default function CanobEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-europe" />;
}
