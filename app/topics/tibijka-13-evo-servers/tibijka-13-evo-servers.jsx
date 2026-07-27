import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-evo-servers');
}

export default function Tibijka13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-evo-servers" />;
}
