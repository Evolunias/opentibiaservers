import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-54-evo-server');
}

export default function Tibijka854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-54-evo-server" />;
}
