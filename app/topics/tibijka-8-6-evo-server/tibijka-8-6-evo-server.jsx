import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-evo-server');
}

export default function Tibijka86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-evo-server" />;
}
