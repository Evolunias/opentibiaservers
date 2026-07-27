import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-evo-server');
}

export default function Tibijka76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-evo-server" />;
}
