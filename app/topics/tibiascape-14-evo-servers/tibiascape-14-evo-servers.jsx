import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-evo-servers');
}

export default function Tibiascape14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-evo-servers" />;
}
