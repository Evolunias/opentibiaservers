import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-poland');
}

export default function TibijkaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-poland" />;
}
