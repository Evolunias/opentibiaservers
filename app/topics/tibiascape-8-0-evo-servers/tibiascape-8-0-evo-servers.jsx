import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-evo-servers');
}

export default function Tibiascape80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-evo-servers" />;
}
