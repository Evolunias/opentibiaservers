import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-usa');
}

export default function TibijkaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-usa" />;
}
