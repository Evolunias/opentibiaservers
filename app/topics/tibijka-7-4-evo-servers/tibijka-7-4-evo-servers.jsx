import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-evo-servers');
}

export default function Tibijka74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-evo-servers" />;
}
