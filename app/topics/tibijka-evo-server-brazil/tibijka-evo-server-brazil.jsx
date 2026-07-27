import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-brazil');
}

export default function TibijkaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-brazil" />;
}
