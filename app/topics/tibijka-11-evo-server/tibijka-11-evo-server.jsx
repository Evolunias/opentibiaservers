import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-evo-server');
}

export default function Tibijka11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-evo-server" />;
}
