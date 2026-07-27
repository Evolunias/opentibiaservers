import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-canada');
}

export default function TibijkaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-canada" />;
}
