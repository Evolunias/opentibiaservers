import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-evo-servers');
}

export default function Tibiascape86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-evo-servers" />;
}
