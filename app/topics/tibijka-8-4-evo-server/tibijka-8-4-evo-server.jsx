import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-evo-server');
}

export default function Tibijka84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-evo-server" />;
}
