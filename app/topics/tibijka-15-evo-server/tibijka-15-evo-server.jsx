import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-evo-server');
}

export default function Tibijka15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-evo-server" />;
}
