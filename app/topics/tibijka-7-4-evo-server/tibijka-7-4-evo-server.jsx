import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-evo-server');
}

export default function Tibijka74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-evo-server" />;
}
