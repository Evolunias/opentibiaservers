import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-evo-servers');
}

export default function Tibiascape15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-evo-servers" />;
}
