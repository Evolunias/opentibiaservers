import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-north-america');
}

export default function TibijkaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-north-america" />;
}
