import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-evo-servers');
}

export default function Tibiascape772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-evo-servers" />;
}
