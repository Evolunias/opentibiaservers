import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-evo-servers');
}

export default function Tibiascape76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-evo-servers" />;
}
