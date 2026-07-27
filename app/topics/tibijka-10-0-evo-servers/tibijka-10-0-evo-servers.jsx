import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-evo-servers');
}

export default function Tibijka100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-evo-servers" />;
}
