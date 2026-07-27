import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-servers-usa');
}

export default function TibijkaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-servers-usa" />;
}
