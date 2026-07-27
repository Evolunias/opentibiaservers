import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-evo-servers');
}

export default function Tibiaorigins71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-evo-servers" />;
}
