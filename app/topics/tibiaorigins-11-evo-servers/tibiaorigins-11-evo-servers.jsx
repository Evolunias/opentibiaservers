import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-evo-servers');
}

export default function Tibiaorigins11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-evo-servers" />;
}
