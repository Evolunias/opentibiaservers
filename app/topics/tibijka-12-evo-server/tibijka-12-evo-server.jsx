import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-evo-server');
}

export default function Tibijka12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-evo-server" />;
}
