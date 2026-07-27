import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-germany');
}

export default function TibijkaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-germany" />;
}
