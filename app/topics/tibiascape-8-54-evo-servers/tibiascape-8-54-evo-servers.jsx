import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-evo-servers');
}

export default function Tibiascape854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-evo-servers" />;
}
