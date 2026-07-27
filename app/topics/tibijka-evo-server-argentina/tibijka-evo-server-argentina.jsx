import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-argentina');
}

export default function TibijkaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-argentina" />;
}
