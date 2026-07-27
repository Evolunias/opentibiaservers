import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-evo-servers');
}

export default function Tibiaorigins80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-evo-servers" />;
}
