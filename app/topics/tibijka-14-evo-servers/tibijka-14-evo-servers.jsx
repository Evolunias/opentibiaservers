import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-evo-servers');
}

export default function Tibijka14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-evo-servers" />;
}
