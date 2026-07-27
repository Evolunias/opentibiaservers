import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-evo-server');
}

export default function Tibijka81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-evo-server" />;
}
