import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-evo-servers');
}

export default function Tibijka76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-evo-servers" />;
}
