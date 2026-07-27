import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-servers-brazil');
}

export default function TibijkaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-servers-brazil" />;
}
