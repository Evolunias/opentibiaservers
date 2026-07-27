import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-evo-server');
}

export default function Tibijka13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-evo-server" />;
}
