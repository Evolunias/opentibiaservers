import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-evo-servers');
}

export default function Tibijka772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-evo-servers" />;
}
