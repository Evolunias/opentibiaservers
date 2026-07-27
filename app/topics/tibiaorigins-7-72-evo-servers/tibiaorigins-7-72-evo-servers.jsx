import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-evo-servers');
}

export default function Tibiaorigins772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-evo-servers" />;
}
