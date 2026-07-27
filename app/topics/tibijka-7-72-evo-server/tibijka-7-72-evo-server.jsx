import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-evo-server');
}

export default function Tibijka772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-evo-server" />;
}
